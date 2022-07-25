import wave
import contextlib
import pathlib
from resemblyzer import VoiceEncoder, preprocess_wav
from pathlib import Path
from spectralcluster import SpectralClusterer
from spectralcluster import AutoTune
import math
from sklearn.cluster import SpectralClustering

fname = '/home/auishik/Documents/multi speaker/10small.wav'

with contextlib.closing(wave.open(fname,'r')) as f:
    frames = f.getnframes()
    rate = f.getframerate()
    duration = frames / float(rate)

pathlib.Path().resolve()


fpath = Path(fname)
wav = preprocess_wav(fpath)

encoder = VoiceEncoder('cpu')
_, cont_embeds, wav_splits = encoder.embed_utterance(wav, return_partials=True, rate=16)


clusterer = SpectralClusterer(min_clusters = 3, max_clusters = 10, custom_dist = "cosine")


labels = clusterer.predict(cont_embeds)
def create_labelling(labels, wav_splits):
    from resemblyzer.audio import sampling_rate    
    times = [((s.start + s.stop) / 2) / sampling_rate for s in wav_splits]
    
    labelling = []
    start_time = 0

    for i, time in enumerate(times):
        
        if i>0 and labels[i]!=labels[i-1]:
            temp = {'id': str(labels[i-1]), 'start_time' : start_time, 'end_time' : time}
            labelling.append((temp))
            start_time = time
        if i==len(times)-1:
            temp = {'id': str(labels[i]),'start_time' : start_time, 'end_time' : time}
            labelling.append((temp))

    return (labelling) 

